import React, { useEffect, useState } from "react"
import axios from "axios"
import { ImPriceTag } from "react-icons/im"
import { FcAbout } from "react-icons/fc"
import { Link } from "react-router-dom"
import { MDBBtn } from "mdb-react-ui-kit"

const Products = () => {
  const [product, setproduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const fetchUserData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        "https://victorious-trunks-newt.cyclic.app/api/v1/products"
      )
      console.log(response)
      setproduct(response.data.data["Products"])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  const handleAddToCart = (productId) => {
    const productToAdd = product.find((p) => p._id === productId)
    setCartItems([...cartItems, productToAdd])
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Products</h2>

      {product.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {product.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition"
            >
              <img
                className="mb-8"
                src={product.image}
                alt=""
                style={{ width: "fit-content" }}
              />
              <div className="mb-4 flex-gap-x-2 text-sm">
                <div>{product.name}</div>
              </div>

              <div className="flex gap-x-4 my-4"></div>
              <div className="flex items-center gap-1">
                <div>
                  <ImPriceTag />
                </div>
                <div>{product.cost}</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <FcAbout />
                </div>
                <div>{product.shortDescription}</div>
              </div>
              <br />
              <div style={{ textAlign: "center", color: "red" }}>
                <Link to={`/manual/${product._id}`}>Manual (Full details)</Link>
                <div>
                  <MDBBtn className="me-1" onClick={() => handleAddToCart(product._id)}>
                    Add to cart
                  </MDBBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
