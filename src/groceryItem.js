import React from 'react';
import PropTypes from 'prop-types';

function GroceryList(props) {
    return (
        <div className="grocery-list">
            <div className="item-info">
                <div className="item-count">{props.quantity}</div>
                <div className="item-name">{props.name}</div>
                <div className="item-cost-box">
                    <div className="item-cost">$1.27</div>
                    <div className="separator"></div>
                    <div className="item-total">$2.54 total</div>
                </div>
                <div className="item-remove-box">
                    <div onClick={() => props.delete(props.id)} className="remove-all-btn">Remove all</div>
                    <div onClick={() => props.remoneOne(props.id)} className="remove-one-btn">Remove 1</div>
                </div>
            </div>
        </div>
    );
}

GroceryList.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    remoneOne: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
};

export default GroceryList;