import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DonationItem = ({ data }) => (
  <div className="card donation">
    <div className="item__content">
      <div className="item-donor">
        <div className="item-donor__image">
          <img src={data.imageUrl} />
        </div>
        <div className="item-donor__donation">
          {
            data.donorDisplayName
              ? <h4 className="donor__name">{data.donorDisplayName}</h4> : <h4>Anonymous</h4>
          }
          {
            data.donorLocalAmount
              ? (
                <p className="donor__amount">
                  <span>
                    {`£${parseFloat(data.donorLocalAmount).toFixed(2)} `}
                  </span>
                  {
                    data.estimatedTaxReclaim ? (
                      <span>
                        {`+£${parseFloat(data.estimatedTaxReclaim).toFixed(2)}`}
                       Gift Aid
                      </span>
                    ) : null
                  }
                </p>
              ) : null
          }
        </div>
      </div>
      {
        data.message
          ? (
            <div className="donor__statement">
              <p>
                {`"${data.message}"`}
              </p>
            </div>
          ) : null
      }
    </div>
  </div>
);

DonationItem.propTypes = {
  data: PropTypes.object
};

export default DonationItem;
