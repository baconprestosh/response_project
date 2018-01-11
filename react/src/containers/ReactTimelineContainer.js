import Timeline from 'react-calendar-timeline/lib';
import moment from 'moment';
import React, { Component } from 'react';

const groups = [
  {id: 1, title: 'Alan'},
  {id: 2, title: 'James'},
  {id: 3, title: 'Jason'},
  {id: 4, title: 'Tim'},
  {id: 5, title: 'Jeff'},
  {id: 6, title: 'Cara'},
  {id: 7, title: 'Dan'},
  {id: 8, title: 'Christina'},
  {id: 9, title: 'Joe'},
  {id: 10, title: 'Mark'},
  {id: 11, title: 'Antonio'},
  {id: 12, title: 'Chris'},
  {id: 13, title: 'Paul'},
  {id: 14, title: 'Dumfuk'}
];

const items = [
  {id: 1, group: 1, title: '162390', start_time: moment(), end_time: moment().add(6, 'hour')},
  {id: 2, group: 2, title: '163393', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(7, 'hour')},
  {id: 3, group: 3, title: '163288', start_time: moment().add(2, 'hour'), end_time: moment().add(10, 'hour')},
  {id: 4, group: 4, title: '163212', start_time: moment().add(0.5, 'hour'), end_time: moment().add(10, 'hour')},
  {id: 5, group: 5, title: '163213', start_time: moment().add(2, 'hour'), end_time: moment().add(13.5, 'hour')},
  {id: 6, group: 6, title: '163226', start_time: moment().add(3, 'hour'), end_time: moment().add(11, 'hour')},
  {id: 7, group: 7, title: '163336', start_time: moment().add(1, 'hour'), end_time: moment().add(4, 'hour')},
  {id: 8, group: 8, title: '163333', start_time: moment(), end_time: moment().add(10, 'hour')},
  {id: 9, group: 9, title: '162896', start_time: moment().add(2, 'hour'), end_time: moment().add(13.5, 'hour')},
  {id: 10, group: 10, title: '164001', start_time: moment().add(0.5, 'hour'), end_time: moment().add(9, 'hour')},
  {id: 11, group: 11, title: '163651', start_time: moment().add(2, 'hour'), end_time: moment().add(10, 'hour')},
  {id: 12, group: 12, title: '163624', start_time: moment().add(2, 'hour'), end_time: moment().add(10, 'hour')},
  {id: 13, group: 13, title: '163270', start_time: moment().add(2, 'hour'), end_time: moment().add(10, 'hour')},
  {id: 14, group: 1, title: '163222', start_time: moment().add(6, 'hour'), end_time: moment().add(10, 'hour')},
  {id: 15, group: 2, title: '163216', start_time: moment().add(8, 'hour'), end_time: moment().add(16, 'hour')},
  {id: 16, group: 3, title: '164006', start_time: moment().add(10, 'hour'), end_time: moment().add(8, 'hour')},
  {id: 17, group: 4, title: '163762', start_time: moment().add(10.5, 'hour'), end_time: moment().add(28, 'hour')},
  {id: 18, group: 5, title: '162995', start_time: moment().add(5.25, 'hour'), end_time: moment().add(6.5, 'hour')},
  {id: 19, group: 6, title: '163224', start_time: moment().add(11.5, 'hour'), end_time: moment().add(26, 'hour')},
  {id: 20, group: 7, title: '163231', start_time: moment().add(4.5, 'hour'), end_time: moment().add(17, 'hour')},
  {id: 21, group: 8, title: '163244', start_time: moment().add(10, 'hour'), end_time: moment().add(17, 'hour')},
  {id: 22, group: 9, title: '163247', start_time: moment().add(14, 'hour'), end_time: moment().add(16, 'hour')},
  {id: 23, group: 10, title: '164111', start_time: moment().add(11, 'hour'), end_time: moment().add(13, 'hour')}
];

class ReactTimelineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        />
      </div>
    );
  }
}

export default ReactTimelineContainer;
