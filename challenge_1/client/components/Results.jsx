import React from 'react';
import css from './style.css'


class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      date: new Date()
    };
    this.parseData = this.parseData.bind(this)
  }

  parseData(data) {
    return data.map((record) => {

      var date = <div className="description">  {record.date} </div>
      var dateHeading = <div className="descHeading"> date:  </div>
      var ctg1 = <div className="description"> {record.category1} </div>
      var ctg1Heading = <div className="descHeading"> category 1: </div>
      var ctg2 = <div className="description">{record.category2} </div>
      var ctg2Heading = <div className="descHeading"> category 2: </div>
      var granularity = <div className="description"> {record.granularity} </div>
      var granularityHeading = <div className="descHeading"> granularity: </div>
      var lang = <div className="description">{record.lang}</div>
      var langHeading = <div className="descHeading"> language:</div>
      var descriptionHeading = <div style={{'font-weight' :'bold',
        'font-family':'Cursive', 'display':'inline'}}>information:</div>
      var description = <div style={{'display':'inline'}}> {record.description} </div>

      return <div className="row">
        {dateHeading}{date}{ctg1Heading}{ctg1}{ctg2Heading}{ctg2}
        {granularityHeading}{granularity}{langHeading}{lang}
        <hr/>
        {descriptionHeading}
        {description}
      </div>
    })
  }

  render() {
    if (this.props.data) {
      return (<div>{this.parseData(this.props.data)}</div>)
    } else {
      return (<div>loading</div>)
    }
  }
}

export default Results