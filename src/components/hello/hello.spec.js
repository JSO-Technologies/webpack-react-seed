import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Hello from './hello';
import Print from './../../services/print.service';

describe('Hello', function () {
    let should;

    beforeEach(() => {
        should = chai.should();
    });

    it('should render (DOM version)', function () {
        //when
        const params = {name: "Jimmy"};
        const hello = TestUtils.renderIntoDocument(<Hello params={params} />);
        const helloElement = ReactDOM.findDOMNode(hello);

        //then
        should.exist(hello);
        expect(helloElement.textContent).to.equal('Hello Jimmy!');
    });

    it('should render (Component version)', function () {
        //when
        const params = {name: "Jimmy"};
        const hello = TestUtils.renderIntoDocument(<Hello params={params} />);
        const helloElement = TestUtils.findRenderedDOMComponentWithTag(hello, 'div');

        //then
        should.exist(hello);
        expect(helloElement.props.className).to.equal('hello');
        expect(helloElement.textContent).to.equal('Hello Jimmy!');
    });

    it('should print hello', function () {
        //given
        let sayHello = sinon.spy(Print, "sayHello");

        //when
        const params = {name: "Jimmy"};
        TestUtils.renderIntoDocument(<Hello params={params} />);

        //then
        expect(sayHello).to.have.been.called;
    });

    it('should render (test without dom)', function () {
        //given
        const shallowRenderer = TestUtils.createRenderer();

        //when
        const params = {name: "Jimmy"};
        shallowRenderer.render(<Hello params={params} />);
        const component = shallowRenderer.getRenderOutput();

        //then
        expect(component.type).to.equal('div');
        expect(component.props.className).to.equal('hello');

        expect(component.props.children[0]).to.equal('Hello ');
        expect(component.props.children[1]).to.equal('Jimmy');
        expect(component.props.children[2]).to.equal('!');
    });
});