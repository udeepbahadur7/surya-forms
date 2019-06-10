import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Field } from 'react-final-form'
import Wizard from './Wizard'
import Error from './Error'
import required from '../utils/required'

import PersonalInformation from './PersonalInformation'
import FamilyInformationForm from './FamilyInformationForm';
import TravellingCountry from './TravellingCountry';
import ExpectedVisit from './ExpectedVisit';
import VisitedCountry from './VisitedCountries';
import LastEductation from './LastEducation';
import EducationWorkInformation from './EductationWorkInformation';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}



const SuryaForm = () => (
    <Wizard
      initialValues={{ married: false  }}
      onSubmit={onSubmit}
    >
      {/* <Wizard.Page title="Education/work Information">
        <EducationWorkInformation /> 
      </Wizard.Page> */}


      <Wizard.Page title="Personal Information" >
        <PersonalInformation />
      </Wizard.Page>

      <Wizard.Page title="Family Information">
        <FamilyInformationForm />
      </Wizard.Page>
     

      
      <Wizard.Page title="Travelling country (inviting person information">
      </Wizard.Page>
      <Wizard.Page title="Last Education(completed)">
      </Wizard.Page>
      <Wizard.Page title="Visited country in Last 5 years">
      </Wizard.Page>

      <Wizard.Page title="Have you applied before?">
      </Wizard.Page>
      <Wizard.Page title="When you want to visit?">
      </Wizard.Page>

      {/* <TravellingCountry /> */}
      {/* <LastEductation whatthehell={"this should be outputed"} />
      <VisitedCountry />
      <ExpectedVisit />
      <PersonalInformation />
      <FamilyInformationForm /> */}
    </Wizard>
)

export default SuryaForm;

