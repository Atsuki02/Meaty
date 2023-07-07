import Button from '../../ui/Button';

function CreatedOrder() {
  return (
    <div className=" flex h-partscreen  flex-col items-center justify-center bg-black px-4 py-3 text-white">
      <p className="mb-7 font-semibold">Thank you for your order :)</p>
      <Button to="/menu" type="primary">
        &larr; Back to menu
      </Button>
    </div>
  );
}

export default CreatedOrder;
