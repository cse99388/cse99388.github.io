



public class crphe {
    interface ds {
        String display();
    }
    class district
    {
        String[] dr = {"Nellore" , "Coimbatore" , "Kakinada" , "Hyderabad"};
        int l;
        String getdistrict(int ft)
        {
            for(int i = 0 ; i < dr.length ; i++)
            {
                if( i == ft)
                {
                     l = i;
                    
                }
            }
            String d = "\n" + "District : " + dr[l] + "\n";
            return d;
        }
        int getdtindex(int ft)
        {
            for(int i = 0 ; i < dr.length ; i++)
            {
                if( i == ft)
                {
                     l = i;
                    
                }
            }
            return l;
        }
    
    }
    class area extends district
    {
       final String arn ;
        String ad;
        String[][] ar = {{"Kovur" , "Padugupadu"} , {"Ganapathy" , "Podanur"} , {"Ramachandrapuram" , "Kapra"} , {"Bommuru" , "Morampudi"}};
        String [][][] mch = {
            {{"KR Machinaries" , "KKR Machinaries" , "HR Machinaries"} , {"PR Machinaries" , "PPR Machinaries"}},
            {{"GR Machinaries" , "GMR Machinaries", "PPR Machinaries"} , {"PLR Machinaries" , "PHR machinaries", "MSR Machinaries"}},
            {{"RR machinaries" , "RKR Machnaries", "HTR Machinaries"} , {"KR Machinaries" , "KSR Machinaries"}},
            {{"BR machinaries" , "BMR Machnaries"} , {"MR Machinaries" , "MMR Machinaries", "KTR Machinaries"}},
        };
        area(String ar_nm)
        {
            super();
            arn = ar_nm;
        }
        String getarindex()
        {
            for(int i = 0 ; i < ar.length ; i++)
            {
                for(int j = 0 ; j < ar[i].length ; j++)
                {
                    if(arn == ar[i][j])
                    {
                        ad = "Area : " + arn;
                        int r = getdtindex(i);
                        ad = ad + getdistrict(i) + "\n" + "\n"; 
                        ad = ad + "Machinaries Shops : " + "\n" + "\n";
                        for(int p = 0 ; p < mch[r].length ; p++)
                        {
                            ad = ad + "in " + ar[r][p] +  " : \n";
                            for(int q = 0; q < mch[r][p].length ; q++)
                            {
                                ad = ad  + mch[r][p][q] + "\n";
                            }
                            ad = ad + "\n";
                        }
                    }
                }
            }
            return ad;
        }
    
    }
    
    
    class crop extends area{
       final double Nitrogen ;
        final double Phosphorous ;
        final double Potassium; 
        String crd;
        String[] crop = {"Cotton", "Paddy", "Groundnut", "Wheat" , "Sugarcane" , "Potato" , "Soyabeans" , "Sunflower" , "Maize"};
            double[] N = {15 , 12.5 , 1.5 , 15 , 15, 18 , 2 , 7.5 , 8};
            double[] P = { 4 , 5 , 2.5 , 6 , 6 , 6 , 6 , 9 , 4};
            double[] k = { 2 , 5 , 0 , 0 , 6 , 9 , 2 , 3 , 2};
            String[] weather = {"Summer" , "Summer" , "Summer" , "Summer" , "Summer" , "Winter" , "Winter" , "Winter" , "Winter"};
            String[][] Machinary= {
                {"1" , "Sprayers" , "Harvestor" , "Motors" , "Tractor"},
                {"2" , "Sprayers" , "Harvestor" , "Levellers" , "Motors" , "Tractor"},
                {"3" , "Sprayers" , "Harvestor" , "Motors" , "Tractor"},
                {"4" , "Sprayers" , "Harvestor" , "Levellers" , "Motors" , "Tractor"},
                {"5" , "Sprayers" ,  "Motors" , "Tractor"},
                {"6" , "Sprayers" ,  "Motors" , "Tractor"},
                {"7" , "Sprayers" , "Harvestor" , "Levellers" , "Motors" , "Tractor"},
                {"8" , "Sprayers" , "Levellers" , "Motors" , "Tractor"},
                {"9" , "Sprayers" , "Harvestor" , "Levellers" , "Motors" , "Tractor"}
             };
        crop(double Nitrogen , double Phosphorous , double Potassium , String ar_nm)
        {
            super(ar_nm);
            this.Nitrogen = Nitrogen ;
            this.Phosphorous = Phosphorous ;
            this.Potassium = Potassium ;
            
        }
        String crop_predicted()
        {
            double[] a = new double[9];
            for(int i = 0 ; i < 9 ; i++)
            {
                a[i] = Math.sqrt(((Nitrogen - N[i])*(Nitrogen - N[i]))+ ((Phosphorous - P[i])*(Phosphorous - P[i])) +((Potassium - k[i])*(Potassium - k[i])));
            }
            double min = a[0];
            for(int i = 0 ; i < 9 ;i++)
            {
                if(a[i] < min)
                {
                    min = a[i];
                }
            }
            for(int i = 0 ; i < 9 ;i++)
            {
               
                if(a[i] == min)
                {
                    crd  =  "Crop name : " + crop[i] + "\n";
                    crd = crd + "Weather : " + weather[i] + "\n" + "\n" + "Machinary Required : " + "\n";
                    for(int j = 0 ; j < 9 ; j++ )
                    {
                        if(Integer.parseInt(Machinary[j][0]) == i)
                        {
                            for(int z = 1 ; z < Machinary[j].length  ; z++)
                            {
                                crd = crd + Machinary[j][z] + "\n"; 
                            }
                        }
                    }
                    String x = getarindex();

                    crd = crd + "\n" + "\n" + x;
                }
            }
    
            return crd ;
            
        }
    }
    class details extends crop implements ds 
    {
        details(double Nitrogen , double Phosphorous , double Potassium ,String ar_nm)
        {
            super(Nitrogen , Phosphorous , Potassium , ar_nm);
        }
        public String display()
        {
            String m = crop_predicted();
            return m;
        }
    }
    public static void main(String[] args)
    {
        String x = report(2 , 6 , 2 , "Bommuru");
        System.out.println(x);
    }
    public static String  report(double N , double  P , double K , String ar_nm) {
        
        crphe.ds ob = new crphe().new details(N , P , K , ar_nm);
        String y = ob.display();
        return y;
    }
    
}
