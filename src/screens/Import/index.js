import React, { useState, useEffect } from "react";
import {
  Tabs,
} from "antd";

import { ImportForm, ListImport } from "./components";
import { connect } from "react-redux";
import importactions from "../../redux/actions/import";
import vendoractions from "../../redux/actions/vendors";
import productactions from "../../redux/actions/product";

const {TabPane} = Tabs

function Import(props) {
  useEffect(() => {
    props.fetchImport();
    props.fetchVendors();
    props.fetchProducts();
  }, []);

  return (
    <div>
      Import
      <hr />
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="List Import Product" key="1">
          <ListImport import={props.import}/>
        </TabPane>

        <TabPane tab="Import Quantity Product" key="2">
          <ImportForm/>
        </TabPane>
      </Tabs>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    import: state.imports.product,
    vendors: state.vendors.vendors,
    product: state.product.product,
    search: state.product.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (params, callback) => {
      dispatch(productactions.onFetchProducts(params, callback));
    },
    fetchImport: () => {
      dispatch(importactions.onFetchImport());
    },
    createImport: () => {
      dispatch(importactions.onCreateImport());
    },
    fetchVendors: () => {
      dispatch(vendoractions.onFetchVendors());
    },
    searchProduct: (data) => {
      dispatch(productactions.onSearchProduct(data))
    },
    searchProductSuccess: () => {
      dispatch(productactions.onSearchProductSuccess([]))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
