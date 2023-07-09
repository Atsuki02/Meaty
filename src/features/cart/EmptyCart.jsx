import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="flex h-partscreen flex-col items-center justify-center space-y-14 bg-black px-4 py-3 text-white">
      <div className="flex items-center justify-center">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      </div>
      <p className="text-center font-semibold">
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;
