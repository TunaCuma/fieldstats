import { useTranslations } from "next-intl";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PlayersTableBody from "./PlayersTableBody";

export default function PlayersList() {
  const t = useTranslations();

  // TODO add sorting
  // TODO add filtering
  // TODO add search

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("playersTable.avatar")}</TableHead>
            <TableHead>{t("playersTable.name")}</TableHead>
            <TableHead>{t("playersTable.team")}</TableHead>
            <TableHead>{t("playersTable.position")}</TableHead>
            <TableHead>{t("playersTable.jerseyNumber")}</TableHead>
          </TableRow>
        </TableHeader>
        <PlayersTableBody />
      </Table>
    </div>
  );
}
