import Contador from '../Contador'
import { shallow } from 'enzyme'



describe('Pruebas sobre el componente contador',()=>{

   test('Probando con enzyme', ()=>{

    const wrapper = shallow(<Contador propNum={0} />)
    expect(wrapper).toMatchSnapshot()

})


  test('Simular click boton aumentar',() => {
    const wrapper = shallow(<Contador propNum={0} />)
    const btn1 = wrapper.find('button').at(0).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toBe('1')
  
  })


  test('Simular click boton restar',() => {
    const wrapper = shallow(<Contador propNum={0} />)
    const btn1 = wrapper.find('button').at(1).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toBe('-1')
  
  })

  test('Simular click boton reset',() => {
    const wrapper = shallow(<Contador propNum={0} />)
    const btn1 = wrapper.find('button').at(2).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toBe('0')
  
  })
  
})