import React from 'react'
import './shop.styles.scss'
import SHOP_DATA from './shop.data'

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = { collections: SHOP_DATA }
    }

    render() {
        return (
            <div>
                {
                    this.state.collections.map(collection => <CollectionPreview key={collection.id} {...collection} />)
                }
            </div>
        )
    }
}

export default Shop