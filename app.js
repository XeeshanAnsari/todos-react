 var data = [];
       
      var component = React.createClass({
           
         propTypes: {
             text: React.PropTypes.arrayOf(
                React.PropTypes.string
           ),
            },
            getDefaultProps: function(){
                return{
                    text: '',
              };
            },
           getInitialState:  function(){
               return {
                   text: this.props.text,
               }
           },
           _save: function(ev){
           
            var value = document.getElementById('value').value;
            data.push(value);
            this.setState({
                text: data,
            })
            
           },
           remove: function(e){
               
            console.log(e)              

           },
          
           
           render: function(){
               return ( 
                   React.DOM.div(
                       {
                           id: "main",
                       },
                   React.DOM.input({
                       tpye: 'text',
                       id: 'value',
                       text: this.props.text,
                   }),
                   React.DOM.button(
                       {
                           onClick: this._save,
                           type:'button',
                           value: 'submit' 
                       },
                      ' SUBMIT'
                   ),
                   React.DOM.div(
                       null,
                       this.props.text.map(function(title , idx) {
                            var item = idx + 1;
                           return React.DOM.div(
                               { 
                                   key: idx,
                                  className: 'item'
                               },
                                 item+ '.  ' +title,
                               React.DOM.button({
                                    onClick:this.remove,
                                    id: idx,
                                    

                               },
                               'Done')
                           
                           )
                     })
                     )
                   )
               )
           }
           
       });
       ReactDOM.render(
             
             React.createElement(component,{
                   text: data,
               }),
            
               
               document.getElementById('app')
           
       )
        