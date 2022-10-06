import { gql, GraphQLClient } from "graphql-request";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/api/2022-07/graphql.json`;
const storeFrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

const Shopify = async (query) => {
  const graphQLClient = new GraphQLClient(URL, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storeFrontAccessToken,
    },
  });
  return await graphQLClient.request(query);
};

export async function getAllProductsNotreCave() {
  const query = gql`
    query {
      collection(handle: "notre-cave") {
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              availableForSale
              tags
              vendor
              productType
              nom_vin: metafield(namespace: "my_fields", key: "nom_vin") {
                value
                type
              }
              millesime: metafield(namespace: "my_fields", key: "millesime") {
                value
                type
              }
              accroche: metafield(namespace: "my_fields", key: "accroche") {
                value
                type
              }
              unite: metafield(namespace: "my_fields", key: "unite") {
                value
                type
              }
              prix_membre: metafield(
                namespace: "my_fields"
                key: "prix_membre"
              ) {
                value
                type
              }
              couleur: metafield(namespace: "my_fields", key: "couleur") {
                value
                type
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collection.products.edges
    ? response.collection.products.edges
    : [];
  return products;
}

export async function getAllProductsBlancs() {
  const query = gql`
    query {
      collection(handle: "vins-blancs") {
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              availableForSale
              tags
              vendor
              productType
              nom_vin: metafield(namespace: "my_fields", key: "nom_vin") {
                value
                type
              }
              millesime: metafield(namespace: "my_fields", key: "millesime") {
                value
                type
              }
              accroche: metafield(namespace: "my_fields", key: "accroche") {
                value
                type
              }
              unite: metafield(namespace: "my_fields", key: "unite") {
                value
                type
              }
              prix_membre: metafield(
                namespace: "my_fields"
                key: "prix_membre"
              ) {
                value
                type
              }
              couleur: metafield(namespace: "my_fields", key: "couleur") {
                value
                type
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collection.products.edges
    ? response.collection.products.edges
    : [];
  return products;
}

export async function getAllProductsRouge() {
  const query = gql`
    query {
      collection(handle: "vins-rouges") {
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              availableForSale
              tags
              vendor
              productType
              nom_vin: metafield(namespace: "my_fields", key: "nom_vin") {
                value
                type
              }
              millesime: metafield(namespace: "my_fields", key: "millesime") {
                value
                type
              }
              accroche: metafield(namespace: "my_fields", key: "accroche") {
                value
                type
              }
              unite: metafield(namespace: "my_fields", key: "unite") {
                value
                type
              }
              prix_membre: metafield(
                namespace: "my_fields"
                key: "prix_membre"
              ) {
                value
                type
              }
              couleur: metafield(namespace: "my_fields", key: "couleur") {
                value
                type
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collection.products.edges
    ? response.collection.products.edges
    : [];
  return products;
}

export async function getAllProductsEffervescents() {
  const query = gql`
    query {
      collection(handle: "vins-effervescents") {
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              availableForSale
              tags
              vendor
              productType
              nom_vin: metafield(namespace: "my_fields", key: "nom_vin") {
                value
                type
              }
              millesime: metafield(namespace: "my_fields", key: "millesime") {
                value
                type
              }
              accroche: metafield(namespace: "my_fields", key: "accroche") {
                value
                type
              }
              unite: metafield(namespace: "my_fields", key: "unite") {
                value
                type
              }
              prix_membre: metafield(
                namespace: "my_fields"
                key: "prix_membre"
              ) {
                value
                type
              }
              couleur: metafield(namespace: "my_fields", key: "couleur") {
                value
                type
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collection.products.edges
    ? response.collection.products.edges
    : [];
  return products;
}

export async function getAllProductsRose() {
  const query = gql`
    query {
      collection(handle: "vins-roses") {
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              availableForSale
              tags
              vendor
              productType
              nom_vin: metafield(namespace: "my_fields", key: "nom_vin") {
                value
                type
              }
              millesime: metafield(namespace: "my_fields", key: "millesime") {
                value
                type
              }
              accroche: metafield(namespace: "my_fields", key: "accroche") {
                value
                type
              }
              unite: metafield(namespace: "my_fields", key: "unite") {
                value
                type
              }
              prix_membre: metafield(
                namespace: "my_fields"
                key: "prix_membre"
              ) {
                value
                type
              }
              couleur: metafield(namespace: "my_fields", key: "couleur") {
                value
                type
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collection.products.edges
    ? response.collection.products.edges
    : [];
  return products;
}

export async function getAllProductsMeilleuresVentes() {
  const query = gql`
    query {
      collection(handle: "meilleures-ventes") {
        title
        products(first: 4) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              availableForSale
              tags
              vendor
              productType
              nom_vin: metafield(namespace: "my_fields", key: "nom_vin") {
                value
                type
              }
              millesime: metafield(namespace: "my_fields", key: "millesime") {
                value
                type
              }
              accroche: metafield(namespace: "my_fields", key: "accroche") {
                value
                type
              }
              unite: metafield(namespace: "my_fields", key: "unite") {
                value
                type
              }
              prix_membre: metafield(
                namespace: "my_fields"
                key: "prix_membre"
              ) {
                value
                type
              }
              couleur: metafield(namespace: "my_fields", key: "couleur") {
                value
                type
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collection.products.edges
    ? response.collection.products.edges
    : [];
  console.log(products);
  return products;
}

export async function getAllProductsVinotheque() {
  const query = gql`
    query {
      collection(handle: "vinotheque") {
        title
        products(first: 40) {
          edges {
            node {
              id
              title
              handle
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              vendor
              description
              productType
              variants(first: 1) {
                nodes {
                  quantityAvailable
                  id
                }
              }
              millesime: metafield(namespace: "my_fields", key: "millesime") {
                value
                type
              }
              accroche: metafield(namespace: "my_fields", key: "accroche") {
                value
                type
              }
              unite: metafield(namespace: "my_fields", key: "unite") {
                value
                type
              }
              couleur: metafield(namespace: "my_fields", key: "couleur") {
                value
                type
              }
              cepages: metafield(namespace: "my_fields", key: "cepages") {
                value
                type
              }
              appellation: metafield(
                namespace: "my_fields"
                key: "appellation"
              ) {
                value
                type
              }
              points: metafield(namespace: "my_fields", key: "points") {
                value
                type
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collection.products.edges
    ? response.collection.products.edges
    : [];
  return products;
}

export async function getAllProductsLeBonCoup() {
  const query = gql`
    query {
      collection(handle: "le-bon-coup") {
        products(first: 3, reverse: true) {
          edges {
            node {
              id
              title
              handle
              vendor
              variants(first: 1) {
                nodes {
                  id
                }
              }
              featuredImage {
                url
                altText
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              millesime: metafield(namespace: "my_fields", key: "millesime") {
                value
                type
              }
              appellation: metafield(
                namespace: "my_fields"
                key: "appellation"
              ) {
                value
                type
              }
              couleur: metafield(namespace: "my_fields", key: "couleur") {
                value
                type
              }
              prix_membre: metafield(
                namespace: "my_fields"
                key: "prix_membre"
              ) {
                value
                type
              }
              unite: metafield(namespace: "my_fields", key: "unite") {
                value
                type
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const products = response.collection.products.edges
    ? response.collection.products.edges
    : [];
  return products;
}

// export async function getAllProductsNotreCave() {
//   const query = gql`
//     {
//       products(first: 250) {
//         edges {
//           node {
//             handle
//             id
//           }
//         }
//       }
//     }
//   `;

//   const response = await Shopify(query);
//   const slugs = response.products.edges ? response.products.edges : [];

//   return slugs;
// }

// get product infos and related products
export async function getProduct(handle) {
  const query = gql`
    {
      productByHandle(handle: "${handle}") {
        collections(first: 1) {
          edges{
            node {
              products(first: 4) {
                edges {
                  node {
                    id
                    title
                    handle
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    images(first: 1) {
                      edges {
                        node {
                          originalSrc
                          altText
                        }
                      }
                    }
                    availableForSale
                    tags
                    vendor
                    productType
                    nom_vin: metafield(namespace: "my_fields", key: "nom_vin") {
                      value
                      type
                    }
                    millesime: metafield(namespace: "my_fields", key: "millesime") {
                      value
                      type
                    }
                    accroche: metafield(namespace: "my_fields", key: "accroche") {
                      value
                      type
                    }
                    unite: metafield(namespace: "my_fields", key: "unite") {
                      value
                      type
                    }
                    prix_membre: metafield(
                      namespace: "my_fields"
                      key: "prix_membre"
                    ) {
                      value
                      type
                    }
                    couleur: metafield(namespace: "my_fields", key: "couleur") {
                      value
                      type
                    }
                  }
                }
              }
            }
          }
        }
        id
        title
        tags
        handle
        description
        productType
        vendor
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        options {
          name
          values
          id
        }
        nom_vin: metafield(namespace: "my_fields", key: "nom_vin") {
          value
          type
        }
        cepages: metafield(namespace: "my_fields", key: "cepages") {
          value
          type
        }
        millesime: metafield(namespace: "my_fields", key: "millesime") {
          value
          type
        }
        note_millesime: metafield(namespace: "my_fields", key: "note_millesime") {
          value
          type
        }
        alcool: metafield(namespace: "my_fields", key: "alcool") {
          value
          type
        }
        bio: metafield(namespace: "my_fields", key: "bio") {
          value
          type
        }
        boire_a_partir_de: metafield(namespace: "my_fields", key: "boire_a_partir_de") {
          value
          type
        }
        potentiel_de_garde: metafield(namespace: "my_fields", key: "potentiel_de_garde") {
          value
          type
        }
        accroche: metafield(namespace: "my_fields", key: "accroche") {
          value
          type
        }
        appellation: metafield(namespace: "my_fields", key: "appellation") {
          value
          type
        }
        unite: metafield(namespace: "my_fields", key: "unite") {
          value
          type
        }
        prix_membre: metafield(
          namespace: "my_fields"
          key: "prix_membre"
        ) {
          value
          type
        }
        couleur: metafield(namespace: "my_fields", key: "couleur") {
          value
          type
        }
        variants(first: 1) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                originalSrc
                altText
              }
              title
              id
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const product = response.productByHandle ? response.productByHandle : [];

  return product;
}

export async function getCarte(handle) {
  const query = gql`
    {
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              image {
                originalSrc
                altText
              }
              title
              id
              price
            }
          }
        }
      }
    }
  `;

  const response = await Shopify(query);
  const carte = response.productByHandle ? response.productByHandle : [];
  return carte;
}
