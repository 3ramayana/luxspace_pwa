import ArrivedItem from '../Components/ArrivedItem';
import Header from '../Components/Header';

const Showcase = ({ items, cart }) => {
  return (
    <>
      <Header mode="dark" cart={cart} />

      <section className="flex flex-col py-16">
        <div className="container mx-auto mb-4">
          <div className="flex justify-center text-center mb-4">
            <h3 className="text-2xl capitalize font-semibold">
              Browse The Products <br className="" />
              for you
            </h3>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-y-10">
            {items &&
              items.map((item) => {
                return <ArrivedItem item={item} key={item.id} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
