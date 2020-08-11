import React from 'react'
import './shop.styles.scss'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selector'

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const Shop = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(collection => 
                <CollectionPreview key={collection.id} {...collection}/>
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(Shop)