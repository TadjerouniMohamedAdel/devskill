import React, { Component } from 'react'

import Loading from '../Loading'
import Page from '../Page'
import ProposalList from './ProposalList'
import { getProposalList, setProposalStatus } from './service'

class ProposalListPage extends Component {

  state = {
    isLoading: true,
    proposals: [],
  }

  componentDidMount () {
    getProposalList().then(proposals => {
      this.setState({
        proposals: proposals,
        isLoading:false
      })
    })
  }

  updateProposalStatus = (id, status) => {
    this.setState(prevState => {
      const prevProposals = prevState.proposals
      const nextProposals = prevProposals.map(proposal =>
        proposal.id === id
          ? {...proposal,status}
          : proposal
      )
      return {
        proposals: nextProposals,
      }
    })
    setProposalStatus(id, status)
      
  }

  render () {
    const { isLoading, proposals } = this.state
    return (
      <Page title="Call for Papers">
        {
          isLoading ? <Loading/> :
        <ProposalList
          proposals={proposals}
          onProposalStatusUpdate={this.updateProposalStatus}
        />
        }
        
      </Page>
    )
  }
}

export default ProposalListPage
