import React from "react";
import MenuItem from "../MenuItem";

export default class Menu extends React.Component {
    render() {
        const { menuName, menuItems } = this.props;
        return (
            <div className="menu">
                <h1>{menuName} Menu</h1>

                <div classname="menuItems">
                    {menuItems.map((item) => (
                        <MenuItem key={item.itemId} {...item} />
                    )
                    )
                    }
                </div>
            </div>
        );
    }
}
