import Input from './components/input/Input'
import Item from './components/item/Item'
import Footer from './components/footer/Footer'

import React from 'react'
import uniqid from 'uniqid'

import './App.css';

function App() {
  const [items, setItems] = React.useState([])
  const [active, setActive] = React.useState(0)
  const [completed, setCompleted] = React.useState(0)
  const [filter, setFilter] = React.useState('All')

  React.useEffect(() => {
    let c = 0
    let a = 0
    for (var i = 0; i < items.length; i++) {
      if (items[i].completed) {
        c += 1
      } else {
        a += 1
      }
    }

    setCompleted(c)
    setActive(a)
  }, [items])

  const findIndex = id => {
    for (var i = 0; i < items.length; i++) {
      if (id === items[i].id) return i
    }

    return null
  }

  const handleSubmit = (value) => {
    setItems([...items, {id: uniqid(), value, completed: false}])
    setActive(prev => prev + 1)
  }

  const toggleAll = () => {
    let newItems
    if (completed === items.length) {
      newItems = items.map(item => ({...item, completed: false }))
    } else {
      newItems = items.map(item => ({...item, completed: true }))
    }
    setItems(newItems)
  }

  const toggle = id => {
    let index = findIndex(id)
    let newItems = [...items]
    let newCompleted = !newItems[index].completed
    newItems[index].completed = newCompleted
    setItems(newItems)
  }

  const destroy = id => {
    let index = findIndex(id)
    let newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const handleEdit = (value, id) => {
    let index = findIndex(id)
    let newItems = [...items]
    newItems[index].value = value
    setItems(newItems)
  }

  const handleClear = () => {
    let newItems = items.filter(item => !item.completed)
    setItems(newItems)
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="paper">
        <Input 
          handleSubmit={handleSubmit} 
          isToggle={0 !== items.length} 
          toggle={toggleAll} 
          toggleStyle={0 !== active ? {color: '#eee'} : {}} 
        />
        {items.map(item => {
          const display = 'All' === filter
            ? true
            : 'Active' === filter
              ? false === item.completed
              : true === item.completed

          if (display) {
            return (
              <Item 
                key={item.id}
                value={item.value} 
                completed={item.completed} 
                toggle={(e) => toggle(item.id)} 
                destroy={() => destroy(item.id)}
                handleEdit={(value) => handleEdit(value, item.id)}
              />
            )
          }
        })}
        {0 !== items.length && (
          <Footer
            active={active} 
            filter={filter}
            handleFilter={(value) => setFilter(value)} 
            isClear={0 !== completed} 
            handleClear={handleClear}
          />
        )}
      </div>
    </div>
  );
}

export default App;
