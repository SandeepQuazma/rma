import React from 'react'
import { Row } from 'react-bootstrap';
import ObjectQuoteCol from './ObjectQuoteCol.jsx'
import {useDispatch,useSelector} from 'react-redux';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

export default function QuotesSections() {
  const {recentQuoteList}  = useSelector((state) => state.dashboardInfo);
  
    var cols = [];
    for (var i = 0; i < 7; i++) {
        cols.push(<ObjectQuoteCol key={i} />);
    }
  return (
<>

    <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mt-2">Recent Quotes</h5>
          <a href="/quotes" className="see-more btn-link small">See more <ArrowRightAltOutlinedIcon/></a>
      </div>
    <Row>
       {
         recentQuoteList.data?.map((data,i)=>{
           const {generated_on,version_number,yearly_premium,total_members}=data;
           const {company_name,contact_person,phone}=data.quote_contact
           const {fname,lname}=data.user
            return <ObjectQuoteCol key={i}
            quoteData={{
              generated_on,
              version_number,
              yearly_premium,
              total_members,
              company_name,
              contact_person,
              phone,
              fname,
              lname

            }} />

        })
       }
    </Row>
    </>
  )
}
