import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import {
//   transactionsSelector,
//   deleteTransactions,
// } from '../../../../domain/transactions/transactionsSlice';
// import { colorsByCategorySelector } from '../../../../domain/categories/categoriesSlice';
import { BrowseTable } from '../../../browse-table';
// import { transactionsTableDataAgregstor } from './utils';
import { CategorySelectionModal } from '../../../category-selection-modal';
import { ConfirmationModal } from '../../../confirmation-modal';

export function TransactionsTable() {
  // const dispatch = useDispatch();
  // const transactions = useSelector(transactionsSelector);
  // const colorsByCategory = useSelector(colorsByCategorySelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRowsIds, setSelectedRowsIds] = useState([]);

  // const rows = transactionsTableDataAgregstor(transactions, colorsByCategory);
  const rows = [{
    data: {
      id: 'id_1',
      date: '11-01-2020',
      name: 'name',
      category: 'category',
      sum: 110,
      currency: 'currency',
      flow: 111,
    },
  }];

  const onSetCategoryButtonClick = (rowsIds) => {
    setSelectedRowsIds(rowsIds);
    setIsModalOpen(true);
  };

  const onDeleteTransactionsButtonClick = (rowsIds) => {
    setSelectedRowsIds(rowsIds);
    setIsDeleteModalOpen(true);
  };

  const onDeleteTransactions = () => {
    // dispatch(deleteTransactions({ transactionIds: selectedRowsIds }));  deleting transactions
    setIsDeleteModalOpen(false);
    setSelectedRowsIds([]);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
    setSelectedRowsIds([]);
  };

  const onConfirmationModalClose = () => {
    setIsDeleteModalOpen(false);
    setSelectedRowsIds([]);
  };

  return (
    <>
      <BrowseTable
        rows={rows}
        handleSetCategoryButtonClick={onSetCategoryButtonClick}
        handleDeleteTransactionsButtonClick={onDeleteTransactionsButtonClick}
      />
      <CategorySelectionModal
        transactionsIds={selectedRowsIds}
        isOpen={isModalOpen}
        close={onModalClose}
      />
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        close={onConfirmationModalClose}
        onConfirm={onDeleteTransactions}
        title="Delete transactions"
        text="Do you really want to delete transactions?"
        confirmButtonText="Delete"
      />
    </>
  );
}
