import LibCrud from '../../lib/LibCrud';

const CrudEdit = {
  /**
   *
   * @param key: any
   *
   * @return
   */
  update : async function() : Promise<any>
  {
    try{
      let ret = false;
      const url = import.meta.env.PUBLIC_API_URL;
      console.log("url=", url); 
      const elm: any = document.querySelector('#item_id');
      const id = elm?.value;      
      const title = document.querySelector<HTMLInputElement>('#title');
      const item = {
        id: Number(id),
        title: title?.value,
        content : '',
      }
console.log(item);
      const body = JSON.stringify(item);		
      const res = await fetch(url + '/tasks/update', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
      console.log(json);   
      if (res.status !== 200) {
        throw new Error(await res.text());
      } 
      ret = true;
      return ret;
    } catch (e) {
      console.error("Error, addItem");
      console.error(e);
      throw new Error('Error , addItem');
    }
  },
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      const valid = await LibCrud.validLogin();
//console.log("valid=", valid);
      if(valid === false) {
//        alert("NG, valid Login");
      }
      //btn
      const button: any = document.querySelector('#btn_save');
      button.addEventListener('click', async() => {
        const res = await this.update();
console.log("res=", res);
      if(res) {
        window.location.href = '/gpt';	
      }
      }); 
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
CrudEdit.startProc();

export default CrudEdit;
