import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Фільтрація */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товарів */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Піца"
                items={[
                  {
                    id: 1,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Закуски"
                items={[
                  {
                    id: 1,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чізбургер піца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
