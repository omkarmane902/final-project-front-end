class bookdriver
{
	public static void main (String[]args)
	{
		book b1 =  new book();
		System.out.println(b1);
		
		b1.brand = "classmet";
	    b1.price = 150;
	    b1.page = 140;
	    b1.type = "ruled";
	    b1.bind = "hird bound";
	    b1.size = "Long";
		
		System.out.println("brand :"+b1.brand);
		System.out.println("price:"+ b1.price);
		System.out.println("page :"+ b1.page);
		System.out.println("type :"+b1.type);
		System.out.println("bind :"+b1.bind);
		System.out.println("size :"+b1.size);
	}
}