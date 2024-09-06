import React, { useState } from 'react'
import PurChaseInfo from './PurChaseInfo'
import Attachments from './Attachments'
import TermConditions from './TermConditions'
import AdditionalInfo from './AdditionalInfo'
import "./TabInfo.scss"
const TabInfo = () => {

	const [istabActive, setIsActive] = useState("purchaseInfo")

	const renderTab = (istabActive) => {
		switch (istabActive) {
			case "purchaseInfo":

				return <PurChaseInfo />
			case "attachments":

				return <Attachments />
			case "termCondition":

				return <TermConditions />
			case "additionalInfo":

				return <AdditionalInfo />

			default:
				break;
		}
	}
	return (
		<div className="tabInfo mt-4">
			<ul className="nav tabInfo nav-pills mb-3" id="pills-tab" role="tablist">
				<li className="nav-item" role="presentation">
					<button onClick={() => setIsActive("purchaseInfo")} className="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Purchase Information</button>
				</li>
				<li className="nav-item" role="presentation">
					<button onClick={() => setIsActive("attachments")} className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Attachments</button>
				</li>
				<li className="nav-item" role="presentation">
					<button onClick={() => setIsActive("termCondition")} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Term & Conditions</button>
				</li>
				<li className="nav-item" role="presentation">
					<button onClick={() => setIsActive("additionalInfo")} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Additional Information</button>
				</li>

			</ul>

			{
				renderTab(istabActive)
			}
		</div>
	)
}

export default TabInfo