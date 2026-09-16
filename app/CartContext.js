"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItemsCartSidebar, setCartItemsCartSidebar] = useState([]);
    const [isOpenCartSidebar, setIsOpenCartSidebar] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false); // Check if localStorage is loaded

    // 1. Load cart from Local Storage when app starts
    useEffect(() => {
        const savedCart = localStorage.getItem('beyvora_cart');
        if (savedCart) {
            try {
                setCartItemsCartSidebar(JSON.parse(savedCart));
            } catch (error) {
                console.error("Cart parsing error:", error);
            }
        }
        setIsLoaded(true);
    }, []);

    // 2. Save cart to Local Storage every time it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('beyvora_cart', JSON.stringify(cartItemsCartSidebar));
        }
    }, [cartItemsCartSidebar, isLoaded]);

    const openCartSidebar = () => setIsOpenCartSidebar(true);
    const closeCartSidebar = () => setIsOpenCartSidebar(false);
 
    const addItemCartSidebar = (product) => {
        setCartItemsCartSidebar((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.idCartSidebar === product.idCartSidebar
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.idCartSidebar === product.idCartSidebar
                        ? {
                              ...item,
                              quantityCartSidebar:
                                  item.quantityCartSidebar +
                                  (product.quantityCartSidebar || 1),
                          }
                        : item
                );
            }

            return [
                ...prevItems,
                { ...product, quantityCartSidebar: product.quantityCartSidebar || 1 },
            ];
        });

        openCartSidebar(); // Open sidebar when item is added
    };

    const increaseItemCartSidebar = (id) => {
        setCartItemsCartSidebar((prevItems) =>
            prevItems.map((item) =>
                item.idCartSidebar === id
                    ? { ...item, quantityCartSidebar: item.quantityCartSidebar + 1 }
                    : item
            )
        );
    };

    const decreaseItemCartSidebar = (id) => {
        setCartItemsCartSidebar((prevItems) =>
            prevItems
                .map((item) =>
                    item.idCartSidebar === id
                        ? { ...item, quantityCartSidebar: item.quantityCartSidebar - 1 }
                        : item
                )
                .filter((item) => item.quantityCartSidebar > 0)
        );
    };

    const removeItemCartSidebar = (id) => {
        setCartItemsCartSidebar((prevItems) =>
            prevItems.filter((item) => item.idCartSidebar !== id)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItemsCartSidebar,
                isOpenCartSidebar,
                openCartSidebar,
                closeCartSidebar,
                addItemCartSidebar,
                increaseItemCartSidebar,
                decreaseItemCartSidebar,
                removeItemCartSidebar,
            }}
        >
            {/* Prevent hydration mismatch by only rendering children when localStorage is loaded */}
            {isLoaded ? children : null} 
        </CartContext.Provider>
    );
}

export function useCartCartSidebar() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartCartSidebar must be used within a CartProvider');
    }
    return context;
}