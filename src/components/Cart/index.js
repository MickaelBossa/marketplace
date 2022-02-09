import React from "react";
import Layout from "./Layout";

const Cart = () => {
    return (
        <>
            <Layout>
                <tr>
                    <td
                        className="d-flex justify-content-center align-items-center"
                        style={{ fontSize: 20 }}
                    >
                        Your Cart is Empty
                    </td>
                </tr>
            </Layout>
        </>
    );
};
export default Cart;
