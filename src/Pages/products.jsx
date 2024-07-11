import { Fragment,useEffect,useRef,useState } from 'react'
import CardProduct from '../components/Fragments/CardProduct'

const Products = [
  {
    id: 1,
    name: 'Cake',
    price: 1000000,
    image: '../../public/images/cake.jpg', 
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione amet delectus reprehenderit eius alias sapiente laborum expedita earum nulla, excepturi provident nobis sequi iste quis doloribus iure saepe fugit!`
  },
  {
    id: 2,
    name: 'Cake red velvet',
    price: 6000000,
    image: '../../public/images/cake.jpg', 
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus`
  },
  {
    id: 3,
    name: 'Cake buter',
    price: 800000,
    image: '../../public/images/cake.jpg', 
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus`
  }
]
  

const products = () => {
  const email = localStorage.getItem('email')
  const [card, setCard] = useState([])
  const [totalPrice, SetTotalPrice] = useState(0)
  useEffect(() => {
    setCard(JSON.parse(localStorage.getItem("card")) || [])
  }, [])
  
  useEffect(() => {
    if (card.length > 0) {
      const sum = card.reduce((acc, item) => {
        const product = Products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      },0)
      SetTotalPrice(sum)
      localStorage.setItem("card",JSON.stringify(card))
    }
  },[card])
  const handleLogout = () => {
    localStorage.removeItem('email')
    window.location.href = '/login'
  }

  const handleAddToCard = (id) => {
    if (card.find(item => item.id === id)) {
      setCard(card.map(item => item.id === id ? {...item ,qty: item.qty + 1 } : item)
      )
    } else {
      setCard([...card,{id,qty:1}])
    }
  }
 
  const cardRef = useRef([{ id: 1, qty: 1 }])
  
  const handleAddToCardRef = (id) => {
    cardRef.current = [...cardRef.current, { id, qty: 1 }]
    localStorage.setItem("card", JSON.stringify(cardRef.current))
  }

  const totalPriceRef = useRef(null)

  useEffect(() => {
    if (card.length > 0) {
      totalPriceRef.current.style.display = "table-row"
    } else {
      totalPriceRef.current.style.display = "none"
    }
  },[card])


  return (
    <Fragment>
      <div className='bg-blue-500 flex justify-end items-center py-5 text-white font-bold px-8 gap-4'>
        <h1>{email}</h1>
        <h1 className='cursor-pointer bg-black py-1  px-3 rounded-lg' onClick={() => handleLogout()}>Logout</h1>
      </div>
      <div className='flex justify-center py-5 gap-5 mt-7'>
          <div className='w-[55%] grid grid-cols-2'>
          {Products.map((product) => (
            <CardProduct key={product.id}>
            <CardProduct.Header images={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} handleAddToCard={handleAddToCard} id={product.id}>Add to Card</CardProduct.Footer>
          </CardProduct>
          ))}
          </div>
          <div className='w-[45%]'>
          <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-5'>Card</h1>
          <table className='text-left table-auto border-separate border-spacing-x-10'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item) => {
                const product = Products.find((product) => product.id === item.id)
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td className='px-2'>Rp{" "}{product.price.toLocaleString('id-ID', {styles: "currency",currency : "IDR"})}</td>
                    <td>{item.qty}</td>
                    <td>Rp{" "}{(item.qty * product.price).toLocaleString('id-ID', {styles: "currency",currency : "IDR"})}</td>
                  </tr>
                )
              })}
            </tbody>
            <tr ref={totalPriceRef}>
              <td colSpan={3}>total</td>
              <td>Rp{" "} {(totalPrice).toLocaleString('id-ID', {styles: "currency",currency : "IDR"})}</td>
            </tr>
          </table>
          </div>
      </div>
    </Fragment>
  )
}

export default products