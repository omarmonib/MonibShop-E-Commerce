import { Suspense } from 'react';
import CartPageContent from './CartPageContent';

export default function CartPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center mt-12">Loading...</div>}>
      <CartPageContent />
    </Suspense>
  );
}

