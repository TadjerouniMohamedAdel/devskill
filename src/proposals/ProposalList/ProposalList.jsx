import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './ProposalList.css'
import ProposalRow from './ProposalRow'

const ProposalList = ({ proposals, onProposalStatusUpdate }) => (
  <ul className="ProposalList">
    {[].map(proposal => (
      <li
        key={proposal.id}
        className="ProposalList__item"
      >
        <Link
          key={proposal.id}
          className="ProposalList__item__link"
          to={'/proposal'}
        >
          <ProposalRow
            proposal={proposal}
            onStatusUpdate={() => {}}
          />
        </Link>
      </li>
    ))}
  </ul>
)

ProposalList.propTypes = {
  proposals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  onProposalStatusUpdate: PropTypes.func.isRequired,
}

export default ProposalList
