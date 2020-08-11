import React from 'react'
import './directory.styles.scss'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

// components
import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ sections }) =>  (
    <div className='directory-menu'>
        {
            sections.map(section => 
                <MenuItem key={section.id} {...section} />
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)