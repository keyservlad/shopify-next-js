import ProductList from "./ProductList";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

const sortOptions = [
  { name: "Meilleures ventes", value: "BEST_SELLING" },
  { name: "Mieux notés", value: "RATING" },
  { name: "Prix croissant", value: "PRICE_ASC" },
  { name: "Prix décroissant", value: "PRICE_DESC" },
];
const subCategories = [
  { name: "Tous nos vins", href: "/notre-boutique" },
  { name: "Vins Blancs", href: "/notre-boutique/vins-blancs" },
  { name: "Vins Rouges", href: "/notre-boutique/vins-rouges" },
  { name: "Vins Rosés", href: "/notre-boutique/vins-roses" },
  { name: "Vins Effervescents", href: "/notre-boutique/vins-effervescents" },
];
const filters_init = [
  {
    id: "prix",
    name: "Prix",
    options: [
      { value: "15", label: "Moins de 15 €", number: 0, checked: false },
      { value: "15_25", label: "Entre 15 et 25 €", number: 0, checked: false },
      { value: "25_35", label: "Entre 25 et 35 €", number: 0, checked: false },
      { value: "35", label: "Plus de 35 €", number: 0, checked: false },
    ],
  },
  {
    id: "region",
    name: "Région",
    options: [],
  },
  {
    id: "vendor",
    name: "Producteur",
    options: [],
  },
  {
    id: "bio",
    name: "Vins bio",
    options: [{ value: "true", label: "Vins bio", number: 0, checked: false }],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BoutiqueTemplate({ products, pageTitle }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(filters_init);
  const [defaultFilters, setDefaultFilters] = useState(filters_init);
  const [sort, setSort] = useState(sortOptions[0].value);
  const [productList, setProductList] = useState(products);

  const regions = products.map((product) => product.node.productType);
  const vendors = products.map((product) => product.node.vendor);

  const router = useRouter();
  const { filterquery, pricequery, regionquery, bioquery } = router.query;

  useEffect(() => {
    const newFilters = filters.map((filter) => {
      if (filter.id === "region") {
        let options = [];
        regions.forEach((region) => {
          if (!options.find((option) => option.value === region)) {
            options.push({
              value: region,
              label: region,
              number: 1,
              checked: false,
            });
          } else {
            options = options.map((option) => {
              if (option.value === region) {
                return { ...option, number: option.number + 1 };
              } else {
                return option;
              }
            });
          }
        });

        return { ...filter, options };
      } else if (filter.id === "vendor") {
        let options = [];
        vendors.forEach((vendor) => {
          if (!options.find((option) => option.value === vendor)) {
            options.push({
              value: vendor,
              label: vendor,
              number: 1,
              checked: false,
            });
          } else {
            options = options.map((option) => {
              if (option.value === vendor) {
                return { ...option, number: option.number + 1 };
              } else {
                return option;
              }
            });
          }
        });
        return { ...filter, options };
      } else {
        return filter;
      }
    });
    setFilters(newFilters);
    setDefaultFilters(newFilters);
  }, []);

  useEffect(() => {
    let newFilters = [...defaultFilters];
    if (filterquery) {
      const querySortUpper = filterquery.toUpperCase();
      let newSort = sortOptions.find(
        (option) => option.value === querySortUpper
      );
      setSort(newSort.value);
    }
    if (pricequery) {
      newFilters[0].options.forEach((option) => {
        option.checked = false;
        if (option.value === pricequery) {
          option.checked = true;
        }
      });
    }
    if (regionquery) {
      newFilters[1].options.forEach((option) => {
        option.checked = false;
      });
      newFilters[1].options.forEach((option) => {
        const valueTransformed = option.value
          .toLowerCase()
          .replace(new RegExp(/[ô]/g), "o");
        if (
          valueTransformed.includes(regionquery) &&
          newFilters[1].options.every((option) => !option.checked)
        ) {
          option.checked = true;
          return;
        }
      });
    }
    if (bioquery) {
      newFilters[3].options.forEach((option) => {
        option.checked = false;
        if (option.value === bioquery) {
          option.checked = true;
        }
      });
    }
    setFilters(newFilters);
  }, [router.query, defaultFilters]);

  // TODO best selling and rating
  // TODO add numbers to filters
  useEffect(() => {
    let tempProductList = [...products];

    // filter by price
    if (filters[0].options.find((option) => option.checked)) {
      filters[0].options.forEach((option) => {
        if (option.checked) {
          if (option.value === "15") {
            tempProductList = tempProductList.filter(
              (product) =>
                Number(product.node.priceRange.minVariantPrice.amount) /
                  Number(product.node.unite.value) <=
                15
            );
          } else if (option.value === "15_25") {
            tempProductList = tempProductList.filter(
              (product) =>
                Number(product.node.priceRange.minVariantPrice.amount) /
                  Number(product.node.unite.value) >=
                  15 &&
                Number(product.node.priceRange.minVariantPrice.amount) /
                  Number(product.node.unite.value) <=
                  25
            );
          } else if (option.value === "25_35") {
            tempProductList = tempProductList.filter(
              (product) =>
                Number(product.node.priceRange.minVariantPrice.amount) /
                  Number(product.node.unite.value) >=
                  25 &&
                Number(product.node.priceRange.minVariantPrice.amount) /
                  Number(product.node.unite.value) <=
                  35
            );
          } else if (option.value === "35") {
            tempProductList = tempProductList.filter(
              (product) =>
                Number(product.node.priceRange.minVariantPrice.amount) /
                  Number(product.node.unite.value) >=
                35
            );
          }
        }
      });
    }

    // filter by region
    if (filters[1].options.find((option) => option.checked)) {
      filters[1].options.forEach((option) => {
        if (option.checked) {
          tempProductList = tempProductList.filter(
            (product) => product.node.productType === option.value
          );
        }
      });
    }

    // filter by vendor
    if (filters[2].options.find((option) => option.checked)) {
      filters[2].options.forEach((option) => {
        if (option.checked) {
          tempProductList = tempProductList.filter(
            (product) => product.node.vendor === option.value
          );
        }
      });
    }

    // filter by bio
    if (filters[3].options.find((option) => option.checked)) {
      filters[3].options.forEach((option) => {
        if (option.checked) {
          tempProductList = tempProductList.filter(
            (product) =>
              // product.node.tags.includes("bio")
              product.node.bio?.value
          );
        }
      });
    }

    if (sort === "BEST_SELLING") {
      // setProductList(products);
    } else if (sort === "RATING") {
      // setProductList(products);
    } else if (sort === "PRICE_ASC") {
      tempProductList = tempProductList.sort(
        (a, b) =>
          Number(a.node.priceRange.minVariantPrice.amount) /
            Number(a.node.unite.value) -
          Number(b.node.priceRange.minVariantPrice.amount) /
            Number(b.node.unite.value)
      );
    }
    if (sort === "PRICE_DESC") {
      tempProductList = tempProductList.sort(
        (a, b) =>
          Number(b.node.priceRange.minVariantPrice.amount) /
            Number(b.node.unite.value) -
          Number(a.node.priceRange.minVariantPrice.amount) /
            Number(a.node.unite.value)
      );
    }
    setProductList(tempProductList);
  }, [sort, filters]);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filtres
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <Link href={category.href} passHref>
                            <a className="block px-2 py-3">{category.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label} {/*({option.number}) */}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {pageTitle}
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Trier par
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <button
                              onClick={() => setSort(option.value)}
                              className={classNames(
                                option.value === sort
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm w-full text-left"
                              )}
                            >
                              {option.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <Link href={category.href} passHref>
                        <a className="block">{category.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  value={option.checked}
                                  checked={option.checked}
                                  onChange={() => {
                                    let newFilters = [...filters];
                                    newFilters.forEach((filter) => {
                                      if (filter.id === section.id) {
                                        if (filter.options[optionIdx].checked) {
                                          filter.options[
                                            optionIdx
                                          ].checked = false;
                                          return;
                                        }
                                        filter.options.forEach((opt) => {
                                          opt.checked = false;
                                        });
                                        filter.options[optionIdx].checked =
                                          !filter.options[optionIdx].checked;
                                      }
                                    });
                                    setFilters(newFilters);
                                  }}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label} {/*({option.number}) */}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-4">
                <ProductList products={productList} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
