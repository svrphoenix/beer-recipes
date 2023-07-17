import PropTypes from 'prop-types';
import { useState } from 'react';

import { Modal } from './Modal';

const RecipeCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = e => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    document.body.style.overflow = 'unset';
    document.body.style.height = 'initial';
    setIsModalOpen(false);
  };

  const { id, name } = item;
  return (
    <>
      <p
        style={{
          textAlign: 'center',
        }}
        onClick={openModal}
      >
        {id}-{name}
      </p>
      <Modal isOpen={isModalOpen} onClose={closeModal} item={item} />
    </>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RecipeCard;
