import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from "react-beautiful-dnd";
import list from '../../img/list.png';

const ItemList = ({ sort, onClickDone, onClickDelete, onMarkImportant }) => (
    <>
        { sort.length === 0 ?
            <div className={styles.wrap_empty}>
                <p className={styles.empty}> Список пуст...</p>
                <img src={list} alt='empty list'/>
            </div>:
            <Droppable droppableId={'list'}>
                {(provided) => (<div ref={provided.innerRef} {...provided.droppableProps} className={styles.wrap}>
                    {sort.map((item, index) =>
                        <Draggable draggableId={'item' + item.id} index={index} key={item.id} >
                            {(provided) => (
                                <Item
                                    value={ item.value }
                                    isDone={ item.isDone }
                                    isImportant={ item.isImportant }
                                    id={item.id}
                                    onClickDone={onClickDone}
                                    onMarkImportant={onMarkImportant}
                                    onClickDelete={onClickDelete}
                                    provided={provided}
                                    innerRef={provided.innerRef}
                                />)}
                        </Draggable>
                    )}
                    {provided.placeholder}
                </div>)}
            </Droppable>
        }
    </>
);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default ItemList;