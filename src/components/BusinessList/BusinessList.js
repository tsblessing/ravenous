import React from 'react';
import './BusinessList';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return (
      <div className="BusinessList">
         {this.props.businesses.map(business =>
           {
               <Business business={business} />
           })
         };
      </div>
    )
  }
}

export default BusinessList;
