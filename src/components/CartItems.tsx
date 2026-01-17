'use client';

import { CartItemType } from '@/types';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

interface CartItemsProps {
  items: CartItemType[];
  onRemove: (item: CartItemType) => void;
}

const CartItems = ({ items, onRemove }: CartItemsProps) => {
  if (items.length === 0) {
    return <p className="text-sm text-gray-500 py-8">Your cart is empty</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div
          className="flex items-center justify-between p-4 border border-gray-100 rounded-lg"
          key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
        >
          <div className="flex gap-4 flex-1">
            <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden shrink-0">
              <Image
                src={item.images[item.selectedColor]}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                <p className="text-xs text-gray-500">
                  Size: <span className="font-medium">{item.selectedSize.toUpperCase()}</span>
                </p>
                <p className="text-xs text-gray-500">
                  Color: <span className="font-medium">{item.selectedColor}</span>
                </p>
              </div>
              <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
          <button
            onClick={() => onRemove(item)}
            className="btn-delete ml-4 shrink-0"
            aria-label="Remove item from cart"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
