import { useState } from 'react'
import Modal from '../UI/Modal'
import { Button } from 'react-bootstrap'
import classes from './Cart.module.css'


const Cart=()=>{
    const [cartElements,setCartElements]=useState([
        { 
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }
    ])

    const RemoveItem = (title) =>{
        const newCart=cartElements.filter((item)=>item.title !== title )
        setCartElements(newCart)
    }

    return(
        <Modal>
           <h1 className={classes.heading}>Cart</h1>
           <table className={classes.table}>
             <tr className={classes.headingRow}>
                <th className={classes.th}>Item</th>
                <th className={classes.th}>Price</th>
                <th className={classes.th}>Quantity</th>
             </tr>
             {
                cartElements.map((item,index)=>(
                    <tr key={index} className={classes.tr}>
                        <td className={classes.Item}>
                           <img src={item.imageUrl} alt={item.title} style={{ width: '100px' }} />
                           <h5 className={classes.Title}>Album {index+1}</h5>
                        </td>
                        <td className={classes.Price}>
                            {item.price}
                        </td>
                        <td className={classes.Quantity}>
                            <input type="number" value={item.quantity} className={classes.QuantityInput} />
                        </td>
                        <td className="removeButton">
                            <Button variant="danger" onClick={()=>RemoveItem(item.title)}>Remove</Button>
                        </td>
                    </tr>
                ))
             }
           </table>
           <h4 className={classes.amount}>Total : 50$</h4>
           <div className={classes.purchaseButton}>
             <Button variant='primary'>Purchase</Button>
           </div>
        </Modal>
    )
}

export default Cart