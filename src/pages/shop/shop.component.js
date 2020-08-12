import React from 'react'
import './shop.styles.scss'

// router
import { Route } from 'react-router-dom'

// components
import Collection from '../collection/collection.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'

const Shop = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={Collection}/>
    </div>
)

export default Shop