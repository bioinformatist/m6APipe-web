import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid , MenuButton , Button, Radio, Balloon, Icon} from '@alifd/next';
import IceTitle from '@icedesign/title';

import styles from './index.module.scss';


const { Row, Col } = Grid;

const { Item } = MenuButton;
const aligners = ['star', 'fuck'].map(item => <Item key={item}>{item}</Item>);
const strand = ['U', 'fuck'].map(item => <Item key={item}>{item}</Item>);

const RadioGroup = Radio.Group;
class NestApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'unzipped',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({
            value,
        });
    }

    render() {
        return (
            <div>
                <RadioGroup value={this.state.value} onChange={this.onChange} aria-labelledby="groupId">
                    <Radio id="Yes" value="gzipped">Yes</Radio>
                    <Radio id="No" value="unzipped">No</Radio>
                </RadioGroup>
            </div>
        );
    }
}

class TitleApp extends React.Component {

  state = {

  }

  render() {
    return (
      <div>
        <IceTitle>
          Main parameters &nbsp;
          <Balloon trigger={<Icon type="help" style={{position: 'relative', color:'#666666'}} />} align="r" triggerType="hover">
            Main parameters of m6APipe.
          </Balloon>
        </IceTitle>
      </div>
    );
  }
}

function Guide() {
  return (
    <IceContainer className={styles.icebox}>
      <TitleApp />
      <Row>
            <Col span="8">Genome Sequence (fasta)</Col>
            <Col span="4"><Button ghost="light">Select File</Button></Col>
            <Col span="8">Aligners</Col>
            <Col span="4"><MenuButton label="star" selectMode="single" onSelect={keys => console.log(keys)}>{aligners}</MenuButton></Col>
      </Row>
      <Row>
            <Col span="8">Genome Annotation (gtf)</Col>
            <Col span="4"><Button ghost="light">Select File</Button></Col>
            <Col span="8">peakCalling_mode</Col>
            <Col span="4"><MenuButton label="star" selectMode="single" onSelect={keys => console.log(keys)}>{aligners}</MenuButton></Col>
      </Row>
      <Row>
            <Col span="8">ReadPaths</Col>
            <Col span="4"><Button ghost="light">Select File</Button></Col>
            <Col span="8">peakMerged_mode</Col>
            <Col span="4"><MenuButton label="star" selectMode="single" onSelect={keys => console.log(keys)}>{aligners}</MenuButton></Col>
      </Row>
      <Row>
            <Col span="8">Strand Info</Col>
            <Col span="4"><MenuButton label="U" selectMode="single" onSelect={keys => console.log(keys)}>{strand}</MenuButton></Col>
            <Col span="8">expression_analysis_mode</Col>
            <Col span="4"><MenuButton label="star" selectMode="single" onSelect={keys => console.log(keys)}>{aligners}</MenuButton></Col>
      </Row>
      <Row>
            <Col span="8">Gzipped</Col>
            <Col span="4"><NestApp /></Col>
            <Col span="8">methylation_analysis_mode</Col>
            <Col span="4"><MenuButton label="star" selectMode="single" onSelect={keys => console.log(keys)}>{aligners}</MenuButton></Col>
      </Row>
    </IceContainer>
  );
}

export default Guide;
