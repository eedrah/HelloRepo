import React from 'react'

const HelloRepo = (props) => (
  <h2>{'An edit from the other repo!!'}<div>{props.children}</div></h2>
)

module.exports = {
  component: HelloRepo,
  childRoutes: [
    {path: 'one', component: HelloRepo}
  ]
}
