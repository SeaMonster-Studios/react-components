import React, { Fragment } from "react"
import PropTypes from "prop-types"
//
import { ArrowDown } from "../Icons"
import { SubItemsList } from "./SubItemsList"
import { setHtml } from "../../utils"

export const Item = ({
  item,
  subMenuActive,
  toggleSubMenu,
  buttonWithArrow,
}) => {
  if (item.url && item.items && item.items.length) {
    return (
      <Fragment>
        <a
          href={item.url}
          className="item-has-children"
          {...setHtml(item.title)}
        />
        <button onClick={() => toggleSubMenu(item.id)}>
          <ArrowDown />
        </button>
        {subMenuActive && <SubItemsList items={item.items} />}
      </Fragment>
    )
  } else if (!item.url && item.items && item.items.length) {
    return (
      <Fragment>
        <button
          className={`item-has-children ${
            buttonWithArrow ? "button-has-icon" : ""
          }`}
          onClick={() => toggleSubMenu(item.id)}
        >
          <span {...setHtml(item.title)} />
          {buttonWithArrow && <ArrowDown />}
        </button>
        {subMenuActive && <SubItemsList items={item.items} />}
      </Fragment>
    )
  } else {
    return <a href={item.url}>{item.title}</a>
  }
}

Item.propTypes = {
  toggleSubMenu: PropTypes.func,
  subMenuActive: PropTypes.bool.isRequired,
  buttonWithArrow: PropTypes.bool.isRequired,
}
