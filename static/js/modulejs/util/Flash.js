/**
 * Class: Flash
 *
 */
module("util.Flash", function(global){

	/**
	 * Function: getFlashVersion 
	 * ��ȡFlash�汾��
	 * 
	 * Returns:
	 * {Array|undefined} [10,2,152,32]
	 */
	function getFlashVersion(){
		var flashVersion;
		if(window.ActiveXObject){
			try{
				// IE����"WIN 10,2,152,32"��ʽ
				flashVersion=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
			}catch(e){}
		}
		else if(navigator.plugins && navigator.plugins["Shockwave Flash"]){
			// NPAPI����ܹ����������"Shockwave Flash 10.3 r181"��ʽ
			flashVersion = (navigator.plugins["Shockwave Flash"]||0).description;
		}
		
		if(flashVersion){
			/**
			 * ��ʽ���汾��
			 * @param {String}
			 * @return {Array}
			 */
			function format(str){
				return str.match(/(\d)+/g);
			}
			
			flashVersion = format(flashVersion);
		}
		
		return flashVersion;
	
	}
	


});