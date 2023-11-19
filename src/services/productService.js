import axios from "axios";

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/carts');

    if (response.data && response.data.carts && response.data.carts.length > 0) {
      const products = response.data.carts;
      res.status(200).json({ products });
    } else {
      res.status(404).json({ message: 'No products found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error when obtaining the products' });
  }
}
