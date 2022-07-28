import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'

import Loading from '../Loading'
import NotFound from '../NotFound'
import Page from '../Page'
import ProposalDetails from './ProposalDetails'
import './ProposalDetailsPage.css'
import { getProposalDetails } from './service'

class ProposalDetailsPage extends Component {

  
  state = {
    isLoading: true,
    isNotFound: false,
    proposal: {},
  }

  componentDidMount () {
    const id  = this.props.match.params.proposalId
    getProposalDetails(id).then(proposal => {
      if (proposal) {
        this.setState({
          isLoading: false,
          proposal: proposal,
        })
      }else{
        this.setState({
          isLoading: false,
          isNotFound: true,
        })
      }
    })
  }

  render () {
    const { isNotFound, isLoading, proposal } = this.state
    if (!isLoading && isNotFound) return <NotFound/>
    return (
      <Page
        className="ProposalDetailsPage"
        title={isLoading ? '…' : proposal.title}
      >
        <div className="ProposalDetailsPage__content">
          <div>
            <Link
              className="ProposalDetailsPage__back"
              to="/proposals"
            >
              back to Call for Papers
            </Link>
          </div>
          {isLoading ? <Loading/>:<ProposalDetails proposal={proposal}/>
}
        </div>
      </Page>
    )
  }
}

export default withRouter(ProposalDetailsPage);
