export interface Transaction {
  id: number;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

export interface DashboardSummary {
  total: {
    labelValue: number;
  }[] ;

  balance: {
   change: number;
  }[];
}

export interface cardTitle {
  cardTitle: string[];
}

export interface SidebarMenuItem {
  id: number;
  title: string;
}