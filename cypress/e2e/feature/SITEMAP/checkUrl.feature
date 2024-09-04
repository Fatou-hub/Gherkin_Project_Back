Feature: Check status code for a list of URLs

    @QA-288 @test_orphan_page
    Scenario Outline: Scenario Outline name: Check URL ==> <path>
        Given I login to the intranet with user "QA"
        Then I can navigate to the following path <path>

        Examples:
            | path                                               |
            | "/analytics/reports"                               |
            | "/admin/users-management-users-addEdit.php"        |
            | "/admin/programs-management.php"                   |
            | "/admin/programs-addEditProgram.php"               |
            | "/admin/programs-addEditGroup.php"                 |
            | "/admin/users-management.php"                      |
            | "/home-widgetUsersManagement.php"                  |
            | "/admin/users-management-groups-addEdit.php"       |
            | "/common/common-changePassword.php"                |
            | "/admin/widgets-management.php"                    |
            | "/admin/backup-overview.php"                       |
            | "/plugins/home-widgetPostIt.php"                   |
            | "/admin/logs-reader.php"                           |
            #| "/home-widgetPostItToShare.php"                    |
            | "/common/common-widgetManagement.php"              |
            | "/admin/technicalInformation-management.php"       |
            #| "/admin/monitoring-overview.php"                   |
            | "/metadata/tools-statistics.php"                   |
            | "/admin/playerStatistics-infinidb.php"             |
            | "/admin/users-management.php?actionType=users"     |
            | "/admin/dev-listImages.php"                        |
            | "/admin/dev-vpn.php"                               |
            #| "/admin/cronSystem-cronTest.php"                   |
            #| "/admin/cronSystem-cronEdit.php"                   |
            #| "/admin/cronSystem-cronGroups.php"                 |
            | "/zimbalam/editFAQ.php"                            |
            | "/admin/producers-ftp.php"                         |
            #| "/metadata/tools-statistics-process.php"           |
            | "/admin/languages/languages-extraction.php"        |
            | "/admin/languages/languages-management.php"        |
            | "/anr/subscription/list"                           |
            | "/metadata/tools-ftpTransferts.php"                |
            | "/metadata/bnf-followup.php"                       |
            | "/admin/users-management-rights.php"               |
            | "/admin/languages/languages-batchIngestion.php"    |
            | "/metadata/tools-ftpFinalisation.php"              |
            #| "/admin/showFtpUsers.php"                          |
            | "/admin/createFtpUser.php"                         |
            | "/admin/newsletters-monitoring.php"                |
            | "/common/ticketing-overview.php?action=newRequest" |
            | "/admin/believeDirectoryManagment.php"             |
            | "/common/ticketing-overview.php"                   |
            | "/common/ticketing-assignments-overview.php"       |
            #| "/admin/storagesGraph.php"                         |
            | "/csvparser"                                       |
            | "/common/common-idSearch.php"                      |
            | "/common/idsearch"                                 |
            | "/vfdgg"                                           |
            #| "/admin/mysqlprocesslist"                          |
            | "/jobs/mcq"                                        |
            | "/admin/ncis"                                      |
            | "/requester/users"                                 |
            | "/autocron/manager"                                |
            | "/common/notificationsmanager"                     |
            | "/common/communicationtool"                        |
            | "/Common/Changepassword"                           |
            | "/admin/rightsmanagement/"                         |
            | "/anr/myaccounts"                                  |
            | "/anr/subscription/list"                           |
            #| "/Admin/Roaming"                                   |
            | "/layout/contact"                                  |
            | "/admin/languages/languages-management.php"        |
            | "/admin/languages/languages-extraction.php"        |
            | "/requester/requests"                              |
            | "/admin/system"                                    |
            #| "/admin/Roamingtc"                                 |
            | "/admin/maintenance"                               |
            #| "/autocron/history"                                |
            | "/requester/projectid"                             |
            | "/autocron/manualexec"                             |
            | "/tools/procedures"                                |
            | "/ncis/logs/front"                                 |
            | "/request"                                         |
            #| "/pipe"                                            |
            | "/requester/mapentity"                             |
            | "/wiki/"                                           |