import React, { Component } from 'react';

import {
  Content, Col, Row, Box, Chatbox, Memberbox,
  ProductList, ProductListItem, Infobox, DescriptionBlock, ProgressGroup
} from 'adminlte-2-react';
import InfoModal from './InfoModal';
import {
	infobox5, infobox6, infobox7, infobox8, latestOrders, progressGroup1,
  progressGroup2, progressGroup3, progressGroup4, descriptionBlock1,
  descriptionBlock2, descriptionBlock3, descriptionBlock4,
} from './Dashboard.Info';
import MonthlyRecapChart from './dashboard-components/MonthlyRecapChart';
// import monthlyRecapString from '!raw-loader!./dashboard-components/MonthlyRecapChart';

import UpperInfoBoxes from './dashboard-components/UpperInfoBoxes';
// import upperInfoBoxesString from '!raw-loader!./dashboard-components/UpperInfoBoxes';

import VisitorsReport from './dashboard-components/VisitorsReport';
// import visitorsReportString from '!raw-loader!./dashboard-components/VisitorsReport';

import BrowserUsage from './dashboard-components/BrowserUsage';
// import browserUsageString from '!raw-loader!./dashboard-components/BrowserUsage';
import LatestOrders from './dashboard-components/LatestOrders';

// import defaultImg from '../../assets/img/default-50x50.gif';

class Dashboard extends Component {
	state = {
		showInfoModal: false,
		infoModalText: null,
	}
    
	constructor() {
		super();
		this.onHide = this.onHide.bind(this);
		this.showInfoModal = this.showInfoModal.bind(this);
	}

	onHide() {
    this.setState({ showInfoModal: false, infoModalText: null });
  }

  showInfoModal(text) {
    this.setState({ showInfoModal: true, infoModalText: text });
  }

	render(){
		const { showInfoModal, infoModalText } = this.state;
		return(
			<Content title="Dashboard" subTitle="Version 2.0">
				<InfoModal show={showInfoModal} onHide={this.onHide} text={infoModalText} />
				<Row >
          <UpperInfoBoxes />
        </Row>
				<Row>
          <Col md={12}>
            { /* TODO: fix options */}
            <Box
              title="Monthly Recap Report"
              collapsable
              closable
              options={<ul />}
              footer={(
                <Row>
                  <Col sm={3} xs={6} onClick={() => this.showInfoModal(descriptionBlock1)}>
                    <DescriptionBlock
                      percentage={17}
                      percentageColor="green"
                      header="$35,210.43"
                      text="TOTAL REVENUE"
                      indication="up"
                    />
                  </Col>
                  <Col sm={3} xs={6} onClick={() => this.showInfoModal(descriptionBlock2)}>
                    <DescriptionBlock
                      percentage={0}
                      percentageColor="yellow"
                      header="$10,390.90"
                      text="TOTAL COST"
                      indication="left"
                    />
                  </Col>
                  <Col sm={3} xs={6} onClick={() => this.showInfoModal(descriptionBlock3)}>
                    <DescriptionBlock
                      percentage={20}
                      percentageColor="green"
                      header="$24,813.53"
                      text="TOTAL PROFIT"
                      indication="up"
                    />
                  </Col>
                  <Col sm={3} xs={6} onClick={() => this.showInfoModal(descriptionBlock4)}>
                    <DescriptionBlock
                      percentage={18}
                      percentageColor="red"
                      header="1200"
                      text="GOAL COMPLETIONS"
                      indication="down"
                    />
                  </Col>
                </Row>
              )}
            >
              <Row>
                <Col md={8} >
                  <p className="text-center">
                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                  </p>
                  <div className="chart" style={{ height: '180px' }}>
                    <MonthlyRecapChart />
                  </div>
                </Col>
                <Col md={4}>
                  <p className="text-center">
                    <strong>Goal Completion</strong>
                  </p>
                  <div onClick={() => this.showInfoModal(progressGroup1)}>
                    <ProgressGroup
                      text="Add Products to Cart"
                      maxValue={200}
                      currentValue={160}
                      color="aqua"
                    />
                  </div>
                  <div onClick={() => this.showInfoModal(progressGroup2)}>
                    <ProgressGroup
                      text="Complete Purchase"
                      maxValue={400}
                      currentValue={310}
                      color="red"
                    />
                  </div>
                  <div onClick={() => this.showInfoModal(progressGroup3)}>
                    <ProgressGroup
                      text="Visit Premium Page"
                      maxValue={800}
                      currentValue={480}
                      color="green"
                    />
                  </div>
                  <div onClick={() => this.showInfoModal(progressGroup4)}>
                    <ProgressGroup
                      text="Send Inquiries"
                      maxValue={500}
                      currentValue={250}
                      color="yellow"
                    />
                  </div>
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>
				<Row>
          <Col md={8}>
            <div >
              <VisitorsReport />
            </div>
            <Row>
              <Col md={6}>
                <Chatbox
                  type="warning"
                  title="Direct Chat"
                  collapsable
                  closable
                />
              </Col>
              <Col md={6}>
                <Memberbox
                  type="danger"
                  title="Latest Members"
                  collapsable
                  closable
                />
              </Col>
            </Row>
            <div onClick={() => this.showInfoModal(latestOrders)}>
              <LatestOrders />
            </div>
          </Col>
          <Col md={4}>
            <div onClick={() => this.showInfoModal(infobox5)}>
              <Infobox
                iconColorOnly={false}
                icon="ion-ios-pricetag-outline"
                color="yellow"
                text="Inventory"
                number="5,200"
                progress={50}
                progressText="50% Increase in 30 Days"
              />
            </div>
            <div onClick={() => this.showInfoModal(infobox6)}>
              <Infobox
                iconColorOnly={false}
                icon="ion-ios-heart-outline"
                color="green"
                text="Mentions"
                number="92,050"
                progress={20}
                progressText="20% Increase in 30 Days"
              />
            </div>
            <div onClick={() => this.showInfoModal(infobox7)}>
              <Infobox
                iconColorOnly={false}
                icon="ion-ios-cloud-download-outline"
                color="red"
                text="Downloads"
                number="114,381"
                progress={70}
                progressText="70% Increase in 30 Days"
              />
            </div>
            <div onClick={() => this.showInfoModal(infobox8)}>
              <Infobox
                iconColorOnly={false}
                icon="ion-ios-chatbubble-outline"
                color="aqua"
                text="Direct Messages"
                number="163,921"
                progress={40}
                progressText="40% Increase in 30 Days"
              />
            </div>
            <div >
              <BrowserUsage />
            </div>
            <Box type="primary" title="Recently Added Products" closable collapsable footer={<a href="/" className="uppercase">View All Products</a>} footerClass="text-center">
              <ProductList inBox>
                <ProductListItem title="Samsung TV" label="$1800" labelType="warning" description={'Samsung 32" 1080p 60Hz LED Smart HDTV.'} />
                <ProductListItem title="Bicycle" label="$700" labelType="info" description={'26" Mongoose Dolomite Men\'s 7-speed, Navy Blue.'} />
                <ProductListItem title="Xbox One" label="$350" labelType="danger" description="Xbox One Console Bundle with Halo Master Chief Collection." />
                <ProductListItem title="PlayStation 4" label="$399" labelType="success" description="PlayStation 4 500GB Console (PS4)" />
              </ProductList>
            </Box>
          </Col>
        </Row>
			</Content>
		);
	}
}

export default Dashboard;