import { Button } from 'react-bootstrap'

import classes from './Product.module.css'




const ProductsOnScreen=()=>{

    const productsArr = [

        {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },




        {

        title: 'Black and white Colors', 

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },




        {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },




        {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]




    return(

        <>

        <div className={classes.ProductsScreen}>

        <p className={classes.heading}>Music</p>

        <div className={classes.MusicProducts}>

          {productsArr.map((product, index) => (

            <div key={index} className={classes.product}>

             <h2>Album {index+1}</h2>

             <img src={product.imageUrl} alt={product.title} style={{ width: '200px' }} />

             <div className={classes.Price}>

                <h4>${product.price}</h4>

                <Button variant='primary'>Add to Cart</Button>

             </div>

            </div>

          ))}

        </div>

        </div>

        </>

    )

}




export default ProductsOnScreen