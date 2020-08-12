import React from 'react'
import './collection-overview.styles.scss'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
            collections.map(collection => 
                <CollectionPreview key={collection.id} {...collection}/>
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)