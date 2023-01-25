import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import { Table, TableHeader } from './TransactionHistory.styled';

export default function TransactionHistory({ transaction }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>
      <tbody>
        {transaction.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
