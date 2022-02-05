import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';
import { RadioGroup, Radio, ALIGN } from 'baseui/radio';

// import { categoriesSelector } from '../../domain/categories/categoriesSlice';
// import { setTransactionsCategory } from '../../domain/transactions/transactionsSlice';

// eslint-disable-next-line react/prop-types
export function CategorySelectionModal({ isOpen, close, transactionsIds }) {
  const dispatch = useDispatch();
  // const categories = useSelector(categoriesSelector);

  const [category, setCategory] = React.useState('');

  const handleCategorySet = () => {
    dispatch();
    close();
  };

  return (
    <Modal onClose={close} isOpen={isOpen}>
      <ModalHeader>Set category</ModalHeader>
      <ModalBody>
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
          name="number"
          align={ALIGN.vertical}
        >
          {/* {categories.map((item) => (
            <Radio key={item.id} value={item.label}>
              {item.label}
            </Radio>
          ))} */}
        </RadioGroup>
      </ModalBody>
      <ModalFooter>
        <ModalButton kind="tertiary" onClick={close}>
          Cancel
        </ModalButton>
        <ModalButton onClick={handleCategorySet}>Set</ModalButton>
      </ModalFooter>
    </Modal>
  );
}
